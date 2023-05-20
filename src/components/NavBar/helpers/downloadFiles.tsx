import JSZip from "jszip";

export const downloadFiles = async (files: Array<CodeFileType>, name: string) => {
  const zip = new JSZip();
  const projectFolder = zip.folder(name);
  files.forEach((file) => {
    projectFolder?.file(`${file.name}.tsx`, file.code);
  });
  const zipFile = await zip.generateAsync({ type: "blob" });
  const url=URL.createObjectURL(zipFile)
  window.open(url)
};

export interface CodeFileType {
  name: string;
  code: string;
}
