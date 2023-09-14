locals {
  bucket_name = "ecs-tf-matrix"
  table_name  = "ecsTfmatrix"

  ecr_repo_name = "ecs-matrix-ecr-repo"

  ecs_matrix_cluster_name = "ecs-matrix-cluster"
  availability_zones = ["us-east-1a", "us-east-1b", "us-east-1c"]
  ecs_matrix_task_family = "ecs-matrix-task"
  container_port = 3000
  ecs_matrix_task_name = "ecs-matrix-task"
  ecs_task_execution_role_name = "ecs-matrix-task-execution-role"

  application_load_balancer_name = "ecs-matrix-alb"
  target_group_name = "cc-demo-alb-tg"

  ecs_matrix_service_name = "cc-ecs-matrix-servie"
}