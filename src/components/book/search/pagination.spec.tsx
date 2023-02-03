import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "./pagination";

import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";

window.alert = vi.fn();

describe("pagination", () => {
  const setup = (total: number) => {
    render(
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Pagination total={total} />
        </ThemeProvider>
      </RecoilRoot>
    );
  };
  test("If total 10 is given, it should have 3 buttons", () => {
    setup(10);

    const buttons = screen.getAllByRole("button");

    // prev, 1, next
    expect(buttons).toHaveLength(3);
  });

  test("If total 20 is given, it should have 4 buttons", () => {
    setup(20);

    const buttons = screen.getAllByRole("button");

    // prev, 1, 2, next
    expect(buttons).toHaveLength(4);
  });

  test("If total 100 is given, it should have 12 buttons", () => {
    setup(100);

    const buttons = screen.getAllByRole("button");

    // prev, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 next
    expect(buttons).toHaveLength(12);
  });

  test("If total 100 is given, 1 to 10 pages will be shown, ", () => {
    setup(100);

    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText("2")).toBeTruthy();
    expect(screen.getByText("10")).toBeTruthy();
    expect(screen.queryByText("11")).toBeFalsy();
  });

  test(`If total 100 is given
        and user click page 10 then next
        then alert to be called`, async () => {
    setup(100);

    const ten = screen.getByText("10");
    await userEvent.click(ten);

    const next = screen.getAllByRole("button");
    await userEvent.click(next[next.length - 1]);

    expect(window.alert).toBeCalled();
  });

  test(`If total 100 is given
  and user click page 5
  then page 5 will have active class`, async () => {
    setup(100);

    const five = screen.getByText("5");
    await userEvent.click(five);

    expect(five.classList.contains("active")).toBeTruthy();

    const six = screen.getByText("6");
    expect(six.classList.contains("active")).toBeFalsy();
  });

  test(`If total 100 is given
  and user click page 5 then click next
  then page 6 will have active class`, async () => {
    setup(100);

    // user click page 5
    const five = screen.getByText("5");
    await userEvent.click(five);

    expect(five.classList.contains("active")).toBeTruthy();

    // click next
    const buttons = screen.getAllByRole("button");
    const next = buttons[buttons.length - 1];
    await userEvent.click(next);

    // 6 will have active class
    const six = screen.getByText("6");
    expect(five.classList.contains("active")).toBeFalsy();
    expect(six.classList.contains("active")).toBeTruthy();
  });

  test(`If total 101 is given
        and user click page 9 then next
        then 10 should be exist`, async () => {
    setup(101);

    const nine = screen.getByText("9");
    await userEvent.click(nine);

    const next = screen.getAllByRole("button");
    await userEvent.click(next[next.length - 1]);

    const eleven = screen.getByText("10");
    expect(eleven).toBeTruthy();
  });

  test(`If total 1000 is given
  and user click page 9 then next then 10-19 will be shown
  and user click page 19 then next then 20-29 will be shown
  and user click page 25 then prev then 20-29 will be shown
  and user click page 20 then prev then 10-19 will be shown`, async () => {
    setup(1000);

    const buttons = screen.getAllByRole("button");
    const prev = buttons[0];
    const next = buttons[buttons.length - 1];

    // user click page 9 then next then 10-19 will be shown
    const nine = screen.getByText("9");
    await userEvent.click(nine);

    await userEvent.click(next);

    const eleven = screen.getByText("10");
    expect(eleven).toBeTruthy();

    // user click page 19 then next then 20-29 will be shown
    const nineteen = screen.getByText("19");
    await userEvent.click(nineteen);
    await userEvent.click(next);

    const twenty = screen.getByText("20");
    expect(twenty).toBeTruthy();

    // user click page 25 then prev then 20-29 will be shown
    const twentyfive = screen.getByText("25");
    await userEvent.click(twentyfive);
    expect(twenty).toBeTruthy();

    // user click page 20 then prev then 10-19 will be shown
    await userEvent.click(twenty);
    await userEvent.click(prev);
    expect(nineteen).toBeTruthy();
  });
});
