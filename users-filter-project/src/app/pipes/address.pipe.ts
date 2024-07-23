import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const INVALID_ADDRESS =
      !address ||
      !address.rua ||
      address.numero == null ||
      !address.cidade ||
      !address.estado ||
      !address.pais;
    
    if (INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido';
    }

    const { rua, numero, cidade, estado, pais } = address;

    return `${rua}, ${numero}, ${cidade} - ${estado}, ${pais}`;
  }
}
