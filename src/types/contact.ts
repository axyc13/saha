export type Contact = {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: {
    url: string;
    alt?: string;
  };
};
