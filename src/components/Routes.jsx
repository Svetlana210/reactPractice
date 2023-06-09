import { Routes, Route } from 'react-router-dom';
import Counter from '../pages/Counter/Counter';
import Clock from '../pages/Clock/Clock';
import Form from '../pages/Form/Form';
import ColorPicker from 'pages/ColorPicker/ColorPicker';
import colorPickerOptions from '../colorPickerOptions';
import tabs from '../tabs';
import Pokemon from '../pages/Pokemon/Pokemon';
import UseReducer from '../pages/UseReducer/UseReducer';
import Friends from '../pages/Friends/Friends';
import UseRef from '../pages/UseRef/UseRef';
import TabsClass from '../pages/Tabs/TabsClass';
import TabsFuncComp from '../pages/TabsFuncComp/TabsFuncComp';
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route
        path="/colorpicker"
        element={<ColorPicker options={colorPickerOptions} />}
      />
      <Route path="/counter" element={<Counter />} />
      <Route path="/clock" element={<Clock />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useMemo" element={<Friends />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/tabsclass" element={<TabsClass items={tabs} />} />
      <Route path="/tabsfunc" element={<TabsFuncComp items={tabs} />} />
    </Routes>
  );
};

export default UserRoutes;
