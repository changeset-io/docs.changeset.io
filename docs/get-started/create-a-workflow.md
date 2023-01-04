# Create A Workflow 

Creating workflows in Changeset is how you automate code review tasks, and connect code review events to actions. The workflow creator allows you to essentially create a code review "robot" that can do things like welcome new contributors with a warm comment, or automatically merge a review that meets a specific criteria.

Clicking "New Workflow" from a repository overview will take you to the workflow creator

![Workflow](/img/workflow.png)

## Workflow Name

The workflow name is simply the display name, but it is a required field. It helps to give the workflow a descriptive name that hints at what it does. As a simple example, this workflow will leave a comment any time the title of a code review contains the word `bug`. A name like "Comment when a title contains 'bug'" might make sense.

![Workflow Name](/img/workflow-name.png)

## Workflow Events

The events correspond to things that are happening in your repository that you want this workflow to listen to. There are many events to choose from, and the events reference digs deeper into each one. Use the input to filter the list down if you already know which events you're looking for.

The simple workflow in this example only needs to run when two events occur:

 - `opened`: When a pull request is opened by anyone in the repository
 - `edited`: When a pull request's title or body is updated 
 
![Select Events](/img/select-events.png)

## Custom Attributes

Sometimes a workflow requires looking at a specific file in a pull request, or checking that some specific item in a list matches a condition. You can use custom attributes to apply maps, filters, and functions to achieve this behavior in workflows. The Custom Attribute documentation digs deeper into this functionality.

![Custom Attributes](/img/custom-attributes.png)
