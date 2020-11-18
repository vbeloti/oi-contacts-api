/* eslint-disable radix */
/* eslint-disable no-plusplus */

// Função utilizada pelo Ministério da fazenda para validar cpf
// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js

// Função utilizada pelo Ministério da fazenda para validar cnpj
// https://gist.github.com/alexbruno/6623b5afa847f891de9cb6f704d86d02

import IDocumentValidator from '../interfaces/IDocumentValidator';

class DocumentValidator implements IDocumentValidator {
  validate(document: string) {
    return this.TestaCPF(document) || this.TestaCNPJ(document);
  }

  private TestaCPF(cpf: string) {
    let Soma;
    let Resto;
    Soma = 0;
    // document  = RetiraCaracteresInvalidos(cpf,11);
    if (cpf === '00000000000') { return false; }
    for (let i = 1; i <= 9; i++) {
      Soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) { Resto = 0; }
    if (Resto !== parseInt(cpf.substring(9, 10))) { return false; }
    Soma = 0;
    for (let i = 1; i <= 10; i++) {
      Soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) { Resto = 0; }
    if (Resto !== parseInt(cpf.substring(10, 11))) { return false; }
    return true;
  }

  private TestaCNPJ(cnpj: string) {
    if (!cnpj) return false;

    // Aceita receber o valor como string, número ou array com todos os dígitos
    const validTypes = typeof cnpj === 'string' || Number.isInteger(cnpj) || Array.isArray(cnpj);

    // Elimina valor em formato inválido
    if (!validTypes) return false;

    // Guarda um array com todos os dígitos do valor
    const match = cnpj.toString().match(/\d/g);
    const numbers = Array.isArray(match) ? match.map(Number) : [];

    // Valida a quantidade de dígitos
    if (numbers.length !== 14) return false;

    // Elimina inválidos com todos os dígitos iguais
    const items = [...new Set(numbers)];
    if (items.length === 1) return false;

    // Cálculo validador
    const calc = (x: number) => {
      const slice = numbers.slice(0, x);
      let factor = x - 7;
      let sum = 0;

      for (let i = x; i >= 1; i--) {
        const n = slice[x - i];
        sum += n * factor--;
        if (factor < 2) factor = 9;
      }

      const result = 11 - (sum % 11);

      return result > 9 ? 0 : result;
    };

    // Separa os 2 últimos dígitos de verificadores
    const digits = numbers.slice(12);

    // Valida 1o. dígito verificador
    const digit0 = calc(12);
    if (digit0 !== digits[0]) return false;

    // Valida 2o. dígito verificador
    const digit1 = calc(13);
    return digit1 === digits[1];
  }
}

export default DocumentValidator;
