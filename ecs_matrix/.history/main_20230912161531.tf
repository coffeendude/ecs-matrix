terraform {
  required_version = "~> 1.3"

  backend "s3" {
    bucket         = "ecs-tf-matrix"
    key            = "tf-infra/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "ecsTfmatrix"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

module "tf-state" {
  source      = "./modules/tf-state"
  bucket_name = local.bucket_name
  table_name  = local.table_name
}

module "ecrRepo" {
  source = "./modules/ecr"

  ecr_repo_name = local.ecr_repo_name
}

module "ecsCluster" {
    source = "./modules/ecs"

    demo_app_cluster_name = local.demo_app_cluster_name
    availability_zones = local.availability_zones

    demo_app_task_family = local.demo_app_task_family
    ecr_repo_url = module.ecrRepo.repository_url
    container_port = local.container_port
    demo_app_task_name = local.demo_app_task_name
    ecs_task_execution_role_name = local.ecs_task_execution_role_name

    application_load_balancer_name = local.application_load_balancer_name
    target_group_name = local.target_group_name
    demo_app_service_name = local.demo_app_service_name
}

