import validateEmail from '@helpers/validateEmail';

type State = {
  fNameError: boolean;
  lNameError: boolean;
  emailError: boolean;
};

type Action = {
  type: 'EMAIL' | 'FNAME' | 'LNAME';
  value: string;
};

const HeroFormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FNAME':
      return { ...state, fNameError: !action.value };
    case 'LNAME':
      return { ...state, lNameError: !action.value };
    case 'EMAIL':
      return { ...state, emailError: !validateEmail(action.value) };
    default:
      return state;
  }
};

export default HeroFormReducer;
