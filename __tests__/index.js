describe('Vmall 2.0', () => {
  beforeAll(async () => {
    await page.goto('https://vw290.com/th/th', {
      waitUntil: 'domcontentloaded',
    });
    await page.waitForSelector("#footer", {
      visible: true,
    });
  })

  it('render image should be correctly', async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  })
})
