import { useRef } from 'react';


import EmailEditor from 'react-email-editor';

const PageBuilder = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onReady  = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
  );
};
export default PageBuilder;

