import { observer } from "mobx-react-lite";

import {
  Panel,
  PanelHeader,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
} from "@vkontakte/vkui";

import { Icon20UserSquareOnSquareOutline } from "@vkontakte/icons";

import store from "../store/store";

const FirstPanel = observer(({ id, go }) => {
  const user = store.user;

  return (
    <Panel id={id}>
      <PanelHeader>Тестовое задание</PanelHeader>
      {user && (
        <Group>
          <Cell
            before={user.photo_200 ? <Avatar src={user.photo_200} /> : null}
            subtitle={user.city && user.city.title ? user.city.title : ""}
          >
            {`${user.first_name} ${user.last_name}`}
          </Cell>
          <Div>
            <Button
              before={<Icon20UserSquareOnSquareOutline />}
              size="l"
              mode="secondary"
              onClick={go}
              data-to="second-panel"
            >
              Друзья
            </Button>
          </Div>
        </Group>
      )}
    </Panel>
  );
});

export default FirstPanel;
