import { useMediaQuery } from 'react-responsive';
import { MediaQuery } from '../constants/MediaQuery';

export function isMediumScreen(){
  return useMediaQuery({ query: '(min-width: '+MediaQuery.medium+'px)' })
}
