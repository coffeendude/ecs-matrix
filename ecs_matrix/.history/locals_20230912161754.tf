locals {
  bucket_name = "ecs-tf-matrix"
  table_name  = "ecsTfmatrix"

  ecr_repo_name = "ecs-matrix-ecr-repo"

  demo_app_cluster_name = "demo-app-cluster"
    availability_zones = ["us-east-1a", "us-east-1b", "us-east-1c"]
    demo_app_task_family = "demo-app-task"
    container_port = 3000
    demo_app_task_name = "demo-app-task"
    ecs_task_execution_role_name = "demo-app-task-execution-role"

    application_load_balancer_name = "cc-demo-app-alb"
    target_group_name = "cc-demo-alb-tg"

    demo_app_service_name = "cc-demo-app-servie"
}