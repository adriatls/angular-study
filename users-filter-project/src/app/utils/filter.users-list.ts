import { IFilterOptions } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';

const filterListByName = (
  name: string | undefined,
  userList: IUser[]
): IUser[] => {
  if (name == undefined) {
    return userList;
  }
  const filteredList = userList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );
  return filteredList;
};

const filterListByStatus = (
  status: boolean | undefined,
  userList: IUser[]
): IUser[] => {
  if (status == undefined) {
    return userList;
  }
  const filteredList = userList.filter((user) => user.ativo == status);
  return filteredList;
};

const filterListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  userList: IUser[]
): IUser[] => {
  if (startDate == undefined) {
    return userList;
  }
  const filteredList = userList.filter((user) => {
    const dtCadastro = new Date(user.dataCadastro);
    if (endDate) {
      return dtCadastro >= startDate && dtCadastro <= endDate;
    } else {
      return dtCadastro >= startDate;
    }
  });
  return filteredList;
};

export const filterUserList = (
  filterOptions: IFilterOptions,
  userList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  console.log(filterOptions);

  filteredList = filterListByName(filterOptions.name, userList);
  filteredList = filterListByStatus(filterOptions.status, filteredList);
  filteredList = filterListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};
