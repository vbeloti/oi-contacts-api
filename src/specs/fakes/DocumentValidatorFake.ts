import IDocumentValidator from '../../interfaces/IDocumentValidator';

class DocumentValidatorFake implements IDocumentValidator {
  validate(document: string) {
    return true;
  }
}

export default DocumentValidatorFake;
