// Helper functions

export const aggregateList = (list: Array<any>) => `[${list.join(', ')}]`;

export const getListKeys = (list: Array<any>) => list.map((item: any) => item.id);

export const getListKey = (list: Array<any>, selectedId: string) => list.findIndex((item: any) => {
  switch(typeof item) {
    case 'object':
      return item.id === selectedId;
    default:
      return item === selectedId;
  };
});