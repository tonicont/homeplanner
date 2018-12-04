import { User } from './user';

export const USERS: User[] = [
    {'name': 'toni',
      'tasks': [
        {'task': {'desc': 'limpiar cocina'},
          'days': ['lunes', 'jueves']
        },
        {'task': {'desc': 'pasar aspiradora'},
          'days': ['martes', 'viernes']},
        {'task': {'desc': 'planchar'},
          'days': ['martes', 'domingo']}
      ]},
    {'name': 'jessy',
      'tasks': [
        {'task': {'desc': 'hacer baños'},
          'days': ['lunes', 'jueves']},
        {'task': {'desc': 'poner lavadora'},
          'days': ['martes', 'viernes']}
      ]
    },
    {'name': 'mari',
      'tasks': [
        {'task': {'desc': 'hacer la cama'},
          'days': ['domingo']}
      ]
    }
  ];
