import * as pulumi from "@pulumi/pulumi";
import * as port from "@port-labs/port";

const restartMicroservice = new port.Action("restart_microservice", {
    title: "Restart microservice",
    icon: "Terraform",
    identifier: "examples-action-restart-microservice",
    selfServiceTrigger: {
        operation: "DAY-2",
        blueprintIdentifier: "mymicroservice",
        userProperties: {
            stringProps: {
                webhook_url: {
                    title: "Webhook URL",
                    description: "Webhook URL to send the request to",
                    format: "url",
                    "default": "https://example.com",
                    pattern: "^https://.*",
                },
                service: {
                    title: "Service",
                    description: "The service to restart",
                    format: "entity",
                    blueprint: "service",
                    sort: {
                        property: "$updatedAt",
                        order: "DESC",
                    },
                },
            },
        },
    },
    webhookMethod: {
        url: "https://app.getport.io",

    },
});
