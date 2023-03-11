export class Entity<T> {
  private props: T;

  constructor(props: T) {
    this.props = props;
  }

  public getProps(): T {
    return this.props;
  }
}
