import { KeypadInterface } from '../interfaces/KeypadInterface';

export const KeypadGridDefinition: KeypadInterface[][] = [
  [{ mainLabel: '1' }, { mainLabel: '2', secondaryLabel: 'ABC' }, { mainLabel: '3', secondaryLabel: 'DEF' }],
  [{ mainLabel: '4', secondaryLabel: 'GHI' }, { mainLabel: '5', secondaryLabel: 'JKL' }, { mainLabel: '6', secondaryLabel: 'MNO' }],
  [{ mainLabel: '7', secondaryLabel: 'PQRS' }, { mainLabel: '8', secondaryLabel: 'TUV' }, { mainLabel: '9', secondaryLabel: 'WXYZ' }],
  [{ mainLabel: '*' }, { mainLabel: '0' }, { mainLabel: '#' }],
];
