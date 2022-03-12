# 📏 A very basic design editor

A single page React app built with Typescript that contains a very basic design editor.
The dashboard page contains a playground area and two buttons. The first button creates new shapes that can be dragged and positioned all around the playground area. The other button allows the user to the remove a shape that has been selected.

## 🚀 Getting started

1. Clone repository
2. Install node modules by running

```bash
npm install
# or
yarn install
```

3. Run the project locally:

```bash
npm start
# or
yarn start
```

4. You should find your web app at http://localhost:3000.

In order to run the tests you can run

```bash
yarn test --watchAll
```

This app uses lint and prettier to keep the code clean and consistent.

## ✍ Comments about the solution

### Things that could be better

- I have not been able to find the event type that allows me to do:

```bash
Shape.tsx > Line28:
e.target.setPointerCapture(e.pointerId);
```

Therefore I have left a cheeky lint ignore warning on that line. Without setting the pointer capture my shapes were having issues with mouse trailing, so I considered this a good compromise.

- The site is **not fully responsive**, it will not be fully functional in a small device like a smartphone. The previous issue with mouse trailing encouraged me to create a fixed container for the shapes, to facilitate recovering the shapes. But that functionality made responsiveness more complicated, and it remained in the 'nice-to-have' list (I also believe that the mobile interactions would not support my current drag-positioning approach anyway...).
