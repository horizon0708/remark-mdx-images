/*@jsxRuntime automatic @jsxImportSource react*/
import __0___image_png__ from "./image.png";
import __1___image_jpg__ from "./image.jpg";
function MDXContent(_props) {
  const _components = Object.assign(
      {
        p: "p",
        img: "img",
      },
      _props.components
    ),
    { wrapper: MDXLayout } = _components;
  const _content = (
    <>
      <_components.p>
        <_components.img alt="" src={__0___image_png__} />
      </_components.p>
      {"\n"}
      <_components.p>
        <_components.img alt="" src={__0___image_png__} />
      </_components.p>
      {"\n"}
      <_components.p>
        <_components.img alt="" src={__1___image_jpg__} />
      </_components.p>
      {"\n"}
      <_components.p>
        <_components.img alt="" src={__1___image_jpg__} />
      </_components.p>
    </>
  );
  return MDXLayout ? <MDXLayout {..._props}>{_content}</MDXLayout> : _content;
}
export default MDXContent;
