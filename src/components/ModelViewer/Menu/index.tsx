import React, { useCallback, memo, useMemo } from 'react';
import { MdAdd } from 'react-icons/md'
import { Container, Item } from './styles';


export interface ItemProps {
  vergeUrl?: string;
  title: string;
  key: number | string;
  id: string;
  idArea?: string;
  visible?: boolean;
}

export interface MenuProps {
  items: ItemProps[];
  onClickItem: (key: number | string) => void;
  style: object;
  idArea?: string;
}


export interface MenuItemProps {
  item: ItemProps;
  onClickItem: (key: number | string) => void;
  idArea?: string;
}


const MenuItem: React.FC<MenuItemProps> = ({ item, onClickItem, idArea }) => {

  const handleClickItem = useCallback((key:any) => () => {
    onClickItem(key);
  }, [onClickItem])

  const canShow = useMemo(() => {
    if (!idArea) return true;
    return idArea === item.idArea && item.visible;
  }, [idArea, item])

  return (
    <Item id={`${item.id}`} onClick={handleClickItem(item.key)} style={{ display: canShow ? "flex" : "none" }}>
      <MdAdd />
      <p>
        {item.title}
      </p>
    </Item>
  );
}


const Menu: React.FC<MenuProps> = ({ items, onClickItem, style, idArea }) => {
  return (
    <Container style={style}>
      {items.map((item) => <MenuItem key={`${item.key}-${item.title}`} item={item} onClickItem={onClickItem} idArea={idArea} />)}
    </Container>
  );
}

export default memo(Menu);
