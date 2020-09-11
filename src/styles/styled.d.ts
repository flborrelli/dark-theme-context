//Arquivo de definição de tipos, sobrescrevendo definição de tipos do styled-components
import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    }
  }
}