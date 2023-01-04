---
sidebar_position: 1
---

# Create a Workflow

Workflows are how pull requests are connected to specific actions in Changeset. Assuming you have connected a repository,
creating a workflow can be accomplished via the workflow editor.

## Create Your First Workflow

From the repository overview page, select "New Workflow"

![New Workflow Button](/img/workflow-button.png)


## Name the Workflow 

Give the workflow a memorable name. It helps to be descriptive, like "Alert when updating legacy code"

![Name the workflow](/img/workflow-name.png)

## Subscribe to Events

Each option corresponds to an event that may occur in an open pull request, and selecting one assigns this workflow to be evaluated when the event occurs. For example, selecting only "approved" would result in this workflow being run whenever a pull request is approved. 

![Subsribe to events](/img/events.png)

## Custom Attributes 

Sometimes a workflow requires looking at a specific file in a pull request, or checking that some specific item in a list matches a condition. You can use custom attributes to apply maps, filters, and functions to achieve this behavior in workflows. In this example, we'll create a custom attribute called `all javascript files` that can be used later when creating conditions.

1. Select 'Create Custom Attribute'

![Create custom attribute](/img/custom-button.png)

2. Choose an attribute to customize

Only pull request attributes that are lists of objects can be filtered and customized. Here we have chosen `files` so that we can filter the attribute down further.

![Custom attr](/img/choose-attr.png)

3. Give the custom attribute a name

You'll be able to refer to the name later when creating conditions to check before this workflow's actions fire.

![Custom attr name](/img/name-attr.png)

4. Add maps, filters, and functions to modify the attribute

Adding a `filter` allows you to look only at items in a list that match a specific criteria. Here we'll filter the `files` attribute down to only the files that `include` `.js`

![zerofilters](/img/zerofilters.png)

![addfilter](/img/addfilter.png)

![value](/img/filtervalue.png)


## Adding Conditions

Conditions are what determine whether or not the workflow's actions will be ran. Using our custom attribute `all javascript files` as an example, perhaps we want to make sure that no one modifies a file called `dont-touch.js`.

1. Add a new condition

![add condition](/img/addcondition.png)

2. Use the attribute dropdown to find an attribute to test against

![select attribute](/img/searchattrs.png)

3. Choose an operator and specify a value

The operator in this case is `includes` since we're testing a list for inclusion, but other attributes have other operators like `equals`, `greater than` etc.

![operator](/img/operator.png)

## Specifying an Action

When an event that your workflow is subscribed to is fired, Changeset will check your conditions to see if the workflow's actions need to be ran. If the condition check passes, an action is the final step of the workflow. There are several actions to choose from, but in this case, we'll leave a comment on the pull request warning the user that they've touched a forbidden file

1. Use the input and select the `Add a comment to the pull request` action

![action](/img/action.png)

2. Use the pencil icon to edit the action options

![edit action](/img/editaction.png)

3. Specify the markdown to send in the comment

![edit markdown](/img/md.png)

