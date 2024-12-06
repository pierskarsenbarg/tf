resource "port_action" "restart_microservice" {
  title      = "Restart microservice"
  icon       = "Terraform"
  identifier = "examples-action-restart-microservice"
  self_service_trigger = {
    operation            = "DAY-2"
    blueprint_identifier = "mymicroservice"
    user_properties = {
      string_props = {
        "webhook_url" = {
          title       = "Webhook URL"
          description = "Webhook URL to send the request to"
          format      = "url"
          default     = "https://example.com"
          pattern     = "^https://.*"
        }
        service = {
          title       = "Service"
          description = "The service to restart"
          format      = "entity"
          blueprint   = "service"
          sort        = {
            property = "$updatedAt"
            order    = "DESC"
          }
        }
      }
    }
  }
  webhook_method = {
    url  = "https://app.getport.io"
  }
}
