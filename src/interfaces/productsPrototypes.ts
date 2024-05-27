export interface IProductPrototype {
  name: string;
  attributes: (SelectAttribute | TextAttribute)[];
}

export interface IAttribute<T, U> {
  name: string;
  value: T;
  type: U;
}

export enum IAttributeType {
  TEXT = 'text',
  SELECT = 'select',
}

export type SelectAttribute = IAttribute<
  number | string[],
  IAttributeType.SELECT
>;

export interface ISelectAttributeOption {
  type: SelectAttributeType;
  label: string;
}

enum SelectAttributeType {
  NUMERIC = 'numeric',
  TEXT = 'text',
}

export type TextAttribute = IAttribute<string, IAttributeType.TEXT>;

export default IProductPrototype;

export const prototypeExample = {
  name: 'Comedor',
  attributes: [
    {
      name: 'Numero de patas',
      type: 'select',
      value: {
        type: 'numeric',
        min: 1,
        max: 4,
      },
    },
    {
      name: 'size',
      value: 10,
      type: 'text',
    },
    {
      name: 'Tipo de madera',
      type: 'select',
      value: {
        type: 'text',
        list: ['pino', 'roble', 'caoba'],
      },
    },
  ],
};
