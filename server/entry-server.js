import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import App from '../src/App.vue'; // Путь к вашему корневому Vue компоненту

export async function render() {
  const app = createSSRApp(App);

  // Здесь можно добавить глобальные плагины, маршрутизацию, состояние хранилища и т.д.

  const appContent = await renderToString(app);

  // `appContent` теперь содержит отрендеренный HTML вашего приложения
  return appContent;
}