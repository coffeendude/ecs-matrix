terraform {
  required_version = "~> 1.3"

  backend "s3" {
        bucket = "ecs-tf-matrix"
        key = "tf-infra/terraform.tfstate"
        region = "us-east-1"
        dynamodb_table = "ecsTfmatrix"
        encrypt = true
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