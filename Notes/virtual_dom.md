# (useState) decides where in the UI need to be changed.

# Reconcilitation : is the react algorithm uses to diff one tree with another to determine which parts need to be changed.

# Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

# React Fiber is an ongoing reimplementation of React's core algorithm.

# Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique." (----------------key is introduced to improve list performance which is used while fibre algorithm implementation)


# Primary goal of fibre..
## pause work and come back to it later.
## assign priority to different types of work.
## reuse previously completed work.
## abort work if it's no longer needed.

# a fiber is a JavaScript object that contains information about a component, its input, and its output.

# A fiber corresponds to a stack frame, but it also corresponds to an instance of a component.




# PROPS
## Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.
