import { render } from '@testing-library/react';
import Home from '../app/page';
import Legal from '../app/legal/page';
import Login from '../app/(auth)/login/page';
import Register from '../app/(auth)/register/page';
// TODO implement snapshots and more robust tests for protected components
// import Dashboard from '../app/(authorized)/dashboard/page';
// import Admin from '../app/(authorized)/admin/page';
// import Localization from '../app/(authorized)/localization/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return { prefetch: () => null };
  }
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it('renders legal page unchanged', () => {
  const { container } = render(<Legal />);
  expect(container).toMatchSnapshot();
});

it('renders login page unchanged', () => {
  const { container } = render(<Login />);
  expect(container).toMatchSnapshot();
});

it('renders register page unchanged', () => {
  const { container } = render(<Register />);
  expect(container).toMatchSnapshot();
});
