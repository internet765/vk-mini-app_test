import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import FirstPanel from "./panels/FirstPanel";
import SecondPanel from "./panels/SecondPanel";
import store from "./store/store";

const App = observer(() => {
  const [activePanel, setActivePanel] = useState("first-panel");
  const spinner = store.spinner;

  useEffect(() => {
    store.setUser();
  }, []);

  const go = (e) => setActivePanel(e.currentTarget.dataset.to);

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={spinner && <ScreenSpinner size="large" />}>
            <SplitCol>
              <View activePanel={activePanel}>
                <FirstPanel id="first-panel" go={go} />
                <SecondPanel id="second-panel" go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
});

export default App;
