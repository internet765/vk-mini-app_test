import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  List,
  Cell,
  Avatar,
  Text,
  Div,
} from "@vkontakte/vkui";

import store from "../store/store";

const SecondPanel = observer(({ id, go }) => {
  const friends = store.friends;

  useEffect(() => {
    store.setFriends();
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={go} data-to="first-panel" />}
      >
        Список друзей пользователя
      </PanelHeader>
      <Group>
        <List>
          {friends ? (
            friends.map((friend) => (
              <Cell
                key={friend.id}
                before={
                  friend.photo_100 ? (
                    <Avatar src={friend.photo_100} alt={""} />
                  ) : null
                }
                subtitle={
                  friend.city && friend.city.title ? friend.city.title : ""
                }
              >{`${friend.first_name} ${friend.last_name}`}</Cell>
            ))
          ) : (
            <Div>
              <Text weight="medium">У Вас нет друзей!</Text>
            </Div>
          )}
        </List>
      </Group>
    </Panel>
  );
});

export default SecondPanel;
