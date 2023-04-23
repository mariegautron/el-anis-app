import MyComponent from "../../../../slices/Question";

export default {
  title: "slices/Question",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      version: "sktwi1xtmkfgx8626",
      items: [
        {
          reponsetitle: "highway",
          responsedescription: [
            {
              type: "paragraph",
              text: "Est qui et reprehenderit. Culpa laborum ex esse voluptate do veniam ad exercitation duis. Irure esse veniam irure aute elit esse occaecat officia mollit tempor tempor eiusmod dolore nisi.",
              spans: [],
            },
          ],
          isgoodanswer: true,
        },
      ],
      primary: {
        title: [{ type: "heading1", text: "Human", spans: [] }],
        description: [
          {
            type: "paragraph",
            text: "Qui pariatur pariatur irure pariatur nisi.",
            spans: [],
          },
        ],
        category: "2",
        points: 43,
      },
      id: "_Default",
      slice_type: "question",
    }}
  />
);
_Default.storyName = "";
