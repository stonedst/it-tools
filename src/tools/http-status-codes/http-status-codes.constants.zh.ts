export const codesByCategoriesZh: {
  category: string
  codes: {
    code: number
    name: string
    description: string
    type: 'HTTP' | 'WebDav'
  }[]
}[] = [
  {
    category: '1xx 信息响应',
    codes: [
      {
        code: 100,
        name: '继续',
        description: '等待客户端发送请求体。',
        type: 'HTTP',
      },
      {
        code: 101,
        name: '切换协议',
        description: '服务器已同意切换协议。',
        type: 'HTTP',
      },
      {
        code: 102,
        name: '处理中',
        description: '服务器正在处理请求，但尚未有响应可用。',
        type: 'WebDav',
      },
      {
        code: 103,
        name: '早期提示',
        description: '服务器在最终HTTP消息之前返回一些响应头。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '2xx 成功',
    codes: [
      {
        code: 200,
        name: '成功',
        description: '成功的HTTP请求的标准响应。',
        type: 'HTTP',
      },
      {
        code: 201,
        name: '已创建',
        description: '请求已被处理，结果是创建了一个新资源。',
        type: 'HTTP',
      },
      {
        code: 202,
        name: '已接受',
        description: '请求已被接受处理，但处理尚未完成。',
        type: 'HTTP',
      },
      {
        code: 203,
        name: '非权威信息',
        description: '请求成功，但原始请求的内容已被转换代理修改。',
        type: 'HTTP',
      },
      {
        code: 204,
        name: '无内容',
        description: '服务器已成功处理请求，但未返回任何内容。',
        type: 'HTTP',
      },
      {
        code: 205,
        name: '重置内容',
        description: '服务器指示重新初始化发送此请求的文档视图。',
        type: 'HTTP',
      },
      {
        code: 206,
        name: '部分内容',
        description: '由于客户端发送的范围头，服务器仅传递部分资源。',
        type: 'HTTP',
      },
      {
        code: 207,
        name: '多状态',
        description: '后续的消息体是XML消息，可以包含多个独立的响应代码。',
        type: 'WebDav',
      },
      {
        code: 208,
        name: '已报告',
        description: 'DAV绑定的成员已在（多状态）响应的前一部分中枚举。',
        type: 'WebDav',
      },
      {
        code: 226,
        name: 'IM已使用',
        description: '服务器已满足对资源的请求，响应是结果的表示。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '3xx 重定向',
    codes: [
      {
        code: 300,
        name: '多种选择',
        description: '指示客户端可以遵循的资源的多个选项。',
        type: 'HTTP',
      },
      {
        code: 301,
        name: '永久移动',
        description: '此请求及所有未来请求都应定向到给定的URI。',
        type: 'HTTP',
      },
      {
        code: 302,
        name: '已找到',
        description: '重定向到另一个URL。这是行业实践与标准相矛盾的一个例子。',
        type: 'HTTP',
      },
      {
        code: 303,
        name: '查看其他位置',
        description: '可以使用GET方法在另一个URI下找到对请求的响应。',
        type: 'HTTP',
      },
      {
        code: 304,
        name: '未修改',
        description: '表示自请求头指定的版本以来资源未被修改。',
        type: 'HTTP',
      },
      {
        code: 305,
        name: '使用代理',
        description: '请求的资源仅通过代理可用，响应中提供了代理地址。',
        type: 'HTTP',
      },
      {
        code: 306,
        name: '切换代理',
        description: '不再使用。最初意思是"后续请求应使用指定的代理"。',
        type: 'HTTP',
      },
      {
        code: 307,
        name: '临时重定向',
        description: '在这种情况下，应使用另一个URI重复请求；但未来请求仍应使用原始URI。',
        type: 'HTTP',
      },
      {
        code: 308,
        name: '永久重定向',
        description: '请求和所有未来请求都应使用另一个URI重复。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '4xx 客户端错误',
    codes: [
      {
        code: 400,
        name: '错误请求',
        description: '由于明显的客户端错误，服务器无法或不会处理该请求。',
        type: 'HTTP',
      },
      {
        code: 401,
        name: '未授权',
        description: '类似于403禁止，但专门用于需要身份验证且身份验证失败或尚未提供的情况。',
        type: 'HTTP',
      },
      {
        code: 402,
        name: '需要付款',
        description: '为将来使用保留。最初意图是该代码可能用作某种形式的数字货币或微支付方案的一部分。',
        type: 'HTTP',
      },
      {
        code: 403,
        name: '禁止',
        description: '请求有效，但服务器拒绝执行操作。用户可能没有资源所需的必要权限。',
        type: 'HTTP',
      },
      {
        code: 404,
        name: '未找到',
        description: '找不到请求的资源，但将来可能可用。',
        type: 'HTTP',
      },
      {
        code: 405,
        name: '方法不允许',
        description: '请求资源不支持请求方法。',
        type: 'HTTP',
      },
      {
        code: 406,
        name: '不可接受',
        description: '请求的资源只能生成根据请求中发送的Accept头不可接受的内容。',
        type: 'HTTP',
      },
      {
        code: 407,
        name: '需要代理身份验证',
        description: '客户端必须首先使用代理进行身份验证。',
        type: 'HTTP',
      },
      {
        code: 408,
        name: '请求超时',
        description: '服务器等待请求时超时。',
        type: 'HTTP',
      },
      {
        code: 409,
        name: '冲突',
        description: '表示由于请求中的冲突（如编辑冲突）而无法处理请求。',
        type: 'HTTP',
      },
      {
        code: 410,
        name: '已消失',
        description: '表示所请求的资源不再可用，并且不会再次可用。',
        type: 'HTTP',
      },
      {
        code: 411,
        name: '需要长度',
        description: '请求未指定请求资源所需的内容长度。',
        type: 'HTTP',
      },
      {
        code: 412,
        name: '先决条件失败',
        description: '服务器不满足请求者在请求上设置的先决条件之一。',
        type: 'HTTP',
      },
      {
        code: 413,
        name: '请求实体过大',
        description: '请求大于服务器愿意或能够处理的大小。',
        type: 'HTTP',
      },
      {
        code: 414,
        name: '请求URI过长',
        description: '提供的URI对于服务器处理来说太长。',
        type: 'HTTP',
      },
      {
        code: 415,
        name: '不支持的媒体类型',
        description: '请求实体具有服务器或资源不支持的媒体类型。',
        type: 'HTTP',
      },
      {
        code: 416,
        name: '请求范围不符合要求',
        description: '客户端已请求文件的一部分，但服务器无法提供该部分。',
        type: 'HTTP',
      },
      {
        code: 417,
        name: '期望失败',
        description: '服务器无法满足Expect请求头字段的要求。',
        type: 'HTTP',
      },
      {
        code: 418,
        name: '我是茶壶',
        description: '服务器拒绝尝试用茶壶煮咖啡。',
        type: 'HTTP',
      },
      {
        code: 421,
        name: '请求错误定向',
        description: '请求定向到无法产生响应的服务器。',
        type: 'HTTP',
      },
      {
        code: 422,
        name: '不可处理的实体',
        description: '请求格式良好，但由于语义错误而无法遵循。',
        type: 'HTTP',
      },
      {
        code: 423,
        name: '已锁定',
        description: '正在访问的资源已被锁定。',
        type: 'HTTP',
      },
      {
        code: 424,
        name: '依赖失败',
        description: '由于先前请求失败，请求失败。',
        type: 'HTTP',
      },
      {
        code: 425,
        name: '过早',
        description: '表示服务器不愿意冒险处理可能被重放的请求。',
        type: 'HTTP',
      },
      {
        code: 426,
        name: '需要升级',
        description: '客户端应切换到其他协议，如TLS/1.0。',
        type: 'HTTP',
      },
      {
        code: 428,
        name: '需要先决条件',
        description: '源服务器要求请求是有条件的。',
        type: 'HTTP',
      },
      {
        code: 429,
        name: '请求过多',
        description: '用户在给定时间内发送了太多请求。',
        type: 'HTTP',
      },
      {
        code: 431,
        name: '请求头字段过大',
        description: '服务器不愿意处理请求，因为单个头字段或所有头字段集合过大。',
        type: 'HTTP',
      },
      {
        code: 451,
        name: '因法律原因不可用',
        description: '服务器运营商已收到法律要求，拒绝访问包含请求资源的一组资源。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '5xx 服务器错误',
    codes: [
      {
        code: 500,
        name: '内部服务器错误',
        description: '通用错误消息，在遇到意外情况且没有更具体的消息适用时给出。',
        type: 'HTTP',
      },
      {
        code: 501,
        name: '未实现',
        description: '服务器不识别请求方法，或缺乏满足请求的能力。',
        type: 'HTTP',
      },
      {
        code: 502,
        name: '错误网关',
        description: '服务器作为网关或代理时，从上游服务器收到无效响应。',
        type: 'HTTP',
      },
      {
        code: 503,
        name: '服务不可用',
        description: '服务器当前不可用（因为它过载或正在维护）。',
        type: 'HTTP',
      },
      {
        code: 504,
        name: '网关超时',
        description: '服务器作为网关或代理时，未及时收到来自上游服务器的响应。',
        type: 'HTTP',
      },
      {
        code: 505,
        name: 'HTTP版本不支持',
        description: '服务器不支持请求中使用的HTTP协议版本。',
        type: 'HTTP',
      },
      {
        code: 506,
        name: '变体也协商',
        description: '请求的透明内容协商导致循环引用。',
        type: 'HTTP',
      },
      {
        code: 507,
        name: '存储空间不足',
        description: '服务器无法存储完成请求所需的表示。',
        type: 'HTTP',
      },
      {
        code: 508,
        name: '检测到循环',
        description: '服务器在处理请求时检测到无限循环。',
        type: 'HTTP',
      },
      {
        code: 510,
        name: '未扩展',
        description: '需要进一步扩展请求才能让服务器满足它。',
        type: 'HTTP',
      },
      {
        code: 511,
        name: '需要网络身份验证',
        description: '客户端需要进行身份验证才能获得网络访问权限。',
        type: 'HTTP',
      },
    ],
  },
];
