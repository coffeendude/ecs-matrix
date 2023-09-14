resource "aws_ecr_repository" "ecs_matrix_ecr_repo" {
  name = var.ecr_repo_name
}