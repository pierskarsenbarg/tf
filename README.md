# Port provider bug

To run the TF version:

1. `terraform init`
1. `terraform plan`

You should see the plan.

I've converted the TF to a Pulumi program (in `tf-convert`):

1. `cd tf-convert`
1. `pulumi install`
1. `pulumi preview`

You should now see the error message
