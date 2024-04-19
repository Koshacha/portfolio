export default function getAllAncestors(element: Element): Element[] {
  const ancestors: Element[] = [element];
  let currentElement: Element | null = element;

  while (currentElement !== null && currentElement.parentElement !== null) {
    ancestors.push(currentElement.parentElement);
    currentElement = currentElement.parentElement;
  }

  return ancestors;
}
