interface IDoubleArray {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  (arr: any[]): any[]
}

const doubleArray: IDoubleArray = (arr) => arr.concat(arr);

export default doubleArray;
