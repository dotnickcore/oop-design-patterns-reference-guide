interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

type User = { id: string; name: string };

const userResponse: ApiResponse<User> = {
  data: { id: "123", name: "Alice" },
  status: 200,
  success: true
};