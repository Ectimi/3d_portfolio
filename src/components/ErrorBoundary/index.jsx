import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { message = 'Something went wrong.' } = this.props;
    if (this.state.hasError) {
      // 自定义降级后的 UI 并渲染
      return <h1>{message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
