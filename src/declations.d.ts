// to get rid typescript error so that it knows that everything that ended with .jpg, .png, .gif, .svg
// refers to image (when importing)
// Declare modules for image file types so TypeScript knows they can be imported

declare module '*.jpg' {
   const value: string;
   export default value;
 }
  declare module '*.png' {
   const value: string;
   export default value;
 }
  declare module '*.gif' {
   const value: string;
   export default value;
 }
  declare module '*.svg' {
   const value: string;
   export default value;
 }
