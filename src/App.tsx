import { renderLayout } from "./renderer/layout.renderer";

function App() {
  return (
    <div className=" w-screen h-screen bg-white">
      {renderLayout({
        children: renderLayout({
          children: 'end',
          attributes: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          },
        }),
        attributes: {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      })}
    </div>
  );
}

export default App;
