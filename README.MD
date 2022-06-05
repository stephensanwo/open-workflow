# Open Workflow

Open Workflow is an open source low-code analytics automation workflow, that decouples monolithic analytics projects into re-usable functional components that can be chained together to solve a problem. It provides a seamless platform for developers to deploy modular functions that can be re-used by other developers, analysts and non-coders for automated analytics and robotic process automation (RPA).

Open Workflow attempts to improve the collaboration between business process owners (who are typically non-coders), and developers, by providing an infrastructure where developers can share pre-written functions, targeted at solving specific use cases, which consumers can then mix and match while building their workflows using a simple user interface.

### How it Works

Open Workflow is a collection of worfklows that solve an analytics problem or automates a process. The basic unit of a flow is the node and you can have infinite nodes in a flow. Nodes are essentially functions that take an input and generate an output.
The output is either passed on to a subsequent node, multiple subsequent nodes, or as a final output. A node can also either be a component node or a code node.

A component node is a function has been pre built and tested by a contributor and it provides a simple user interface to interact with it. You have little or no flexibility with component nodes. For example, grouping a data frame can be a component node, if all the required variables are converted to input dialogs or a simple key-value input.

Nodes communicate with each other through the edges. nodes will always run in a sequential order except a node is called directly and it does not depend on an output from another node. Selecting a node opens up an actions pane, the configuration of the actions pane will vary depending on if the node is a component node or a code node. Component nodes will have a user interface for inputs, the code nodes however will have a code interface with more flexibility to control and alter the underlying code directly

### Contribute

To contribute, check out the github repository at [https://github.com/stephensanwo/open-workflow](https://github.com/stephensanwo/open-workflow)

### License

[See License](https://github.com/stephensanwo/open-workflow/blob/master/LICENSE)
