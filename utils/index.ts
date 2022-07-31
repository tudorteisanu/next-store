function isPropValuesEqual<T>(subject: T, target: T, propName: string) {
  // @ts-ignore
  return subject[propName] === target[propName];
}

export function compareObjectsByDateProperty<T extends Record<string, any>, K extends keyof T>(property: K):
  (a: T, b: T) => number {
  return (item1: T, item2: T) => {
    return Number(new Date(item2[property])) - Number(new Date(item1[property]));
  };
}

function getUniqueItemsByProperty<T>(items: T[], propName: string): T[] {
  return items.reverse().filter((item, index, array) => {
    return index === array.findIndex(foundItem => isPropValuesEqual(foundItem, item, propName));
  }).reverse();
}

export function unionArraysByAscendPriority<T>(firstArr: T[], secondArr: T[], propName: string): T[] {
  return getUniqueItemsByProperty(firstArr.concat(secondArr), propName);
}

export function updateExistingOrPush<T>(arr: T[], item: any, propName: string): T[] {
  const items = [...arr];
  const foundedItemIndex = items.findIndex((el: any) => el[propName] === item[propName])

  if (foundedItemIndex !== -1) {
    items[foundedItemIndex] = {...item}
  } else {
    items.push(item)
  }

  return items;
}
