export type requestProps = {
  avatar_url: string;
  url: string;
  followers: string;
  name: string;
  location: string;
};

export type responseProps = {
  response: requestProps;
};

export type cardProps = {
  captureUser: (user: string) => void;
};

export type buttonProps = {
  text: string;
  onClick?: () => void;
  type: "submit" | "button";
};
