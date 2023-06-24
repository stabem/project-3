import { TextComponent } from './';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Porro consequatur nesciunt at temporibus optio,
    harum consectetur omnis ex ducimus aperiam
    consequuntur in eum velit fugit cum neque!
    Illo, inventore adipisci.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
