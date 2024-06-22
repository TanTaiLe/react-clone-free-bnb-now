import React, { createContext, useState, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, IRouteConfig } from "@config/router.config";
import { Notfound } from "@container/Notfound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AntdConfigProvider from "./provider/AntdConfigProvider.tsx";

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotiType {
  type?: NotificationType,
  message?: string,
}

export const NotiContext = createContext<any | null>(null)

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const [noti, setNoti] = useState<NotiType>();

  return (
    <QueryClientProvider client={queryClient}>
      <AntdConfigProvider>
        <BrowserRouter basename={"/"}>
          <NotiContext.Provider value={{ noti: noti, setNoti: setNoti }}>
            <Suspense fallback={<div> Please Wait... </div>}>
              <Routes>
                {routes.map((item: IRouteConfig) => (
                  <Route
                    key={item.name}
                    path={item.path}
                    element={item.component}
                  />
                ))}

                <Route path={"*"} element={<Notfound />} />
              </Routes>
            </Suspense>
          </NotiContext.Provider>
        </BrowserRouter>
      </AntdConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
