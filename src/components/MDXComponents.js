import {
  Alert,
  Box,
  chakra,
  Link,
  Kbd,
  useTheme,
  HStack,
  Button,
  useClipboard
} from '@chakra-ui/react';
import NextImage from 'next/image';
import slugify from 'slugify';
import { Highlight } from 'prism-react-renderer';
import { IoClipboardOutline } from 'react-icons/io5';
import HTMLPlot from './HTMLPlot';
import {
  SiTypescript,
  SiPython
} from 'react-icons/si';

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: prop =>
    ['Prism', 'theme', 'code', 'language', 'children'].includes(prop)
});

const Pre = props => <chakra.div my="2em" borderRadius="sm" {...props} />;

const Table = props => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const THead = props => (
  <chakra.th
    bg="brand.surface"
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

const TData = props => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const CopyButton = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value);
  const { code } = useTheme().colors;
  return (
    <Button
      color={code.fg}
      opacity={0.6}
      aria-label="Copy text"
      textTransform="uppercase"
      role="button"
      onClick={onCopy}
      fontSize="md"
      mr={1}
      p={1}
      bgColor="transparent"
      _hover={{ opacity: 1 }}
    >
      <IoClipboardOutline size={18} color="currentColor" />
    </Button>
  );
};

const CodeHighlight = ({ children: codeString, className }) => {
  const language = className ? className.replace('language-', '') : 'text';
  // The highlighter takes literal colours, not CSS variables, so read the
  // palette's code colours straight from the theme.
  const { code } = useTheme().colors;

  // MDX 2 sends inline code (`like this`) through this same component. A fenced
  // block's text always ends in a newline and an inline span's never does, so
  // that tells them apart. Without this, the line-trimming below deletes the
  // only line of an inline span and leaves an empty block.
  if (!className && typeof codeString === 'string' && !codeString.includes('\n')) {
    return <InlineCode>{codeString}</InlineCode>;
  }

  const showLanguage = () => {
    switch (language) {
      case 'typescript':
        return <SiTypescript size={16} color={code.fg} style={{ opacity: 0.5 }} />;
      case 'python':
        return <SiPython size={16} color={code.fg} style={{ opacity: 0.5 }} />;
      default:
        break;
    }
  };

  const customTheme = {
    plain: {
      backgroundColor: code.bg,
      color: code.fg
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: { color: code.comment }
      },
      {
        types: ['namespace'],
        style: { opacity: 0.7 }
      },
      {
        types: ['string', 'attr-value'],
        style: { color: code.string }
      },
      {
        types: ['punctuation', 'operator'],
        style: { color: code.punct }
      },
      {
        types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
        style: { color: code.entity }
      },
      {
        types: ['atrule', 'keyword', 'attr-name', 'selector', 'tag'],
        style: { color: code.keyword }
      },
      {
        types: ['function', 'function-variable', 'deleted'],
        style: { color: code.string }
      }
    ]
  };

  const lineNumberColor = code.lineNo;
  const showLineNumbers = !['shell', 'text'].includes(language);

  return (
    <ChakraHighlight
      code={codeString}
      language={language}
      theme={customTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop();
        return (
          <div data-language={className}>
            <chakra.pre
              className={className}
              sx={{ ...style }}
              overflowX="auto"
              borderRadius="md"
              p={4}
              mx={-4}
              fontSize="sm"
              lineHeight="1.7"
            >
              <HStack justifyContent="flex-end" pb={2}>
                <CopyButton value={codeString.trim()} />
                {showLanguage()}
              </HStack>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <chakra.div {...lineProps} display="table-row" key={i}>
                    {showLineNumbers && (
                      <chakra.span
                        w={8}
                        display="table-cell"
                        textAlign="right"
                        userSelect="none"
                        color={lineNumberColor}
                        pr={3}
                      >
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => {
                      return (
                        <chakra.span
                          {...getTokenProps({ token, key })}
                          key={`${i}.${key}`}
                        />
                      );
                    })}
                  </chakra.div>
                );
              })}
            </chakra.pre>
          </div>
        );
      }}
    </ChakraHighlight>
  );
};

const InlineCode = props => (
  <chakra.code
    apply="mdx.code"
    color={'brand.primary'}
    bg="brand.inlineCode"
    px={1.5}
    py={0.5}
    rounded="md"
    fontSize="0.9em"
    fontWeight="400"
    {...props}
  />
);

const LinkedHeading = props => {
  const slug = slugify(toString(props.children, { lower: true }));
  return (
    <Link href={`#${slug}`} name={slug} role="group">
      <Box
        {...props}
        display="inline"
        fontFamily="heading"
        color="brand.ink"
        fontSize="3xl"
        fontWeight="700"
      >
        {props.children}
      </Box>
      <chakra.span
        aria-label="anchor"
        color="brand.primary"
        userSelect="none"
        fontWeight="normal"
        fontSize="1rem"
        outline="none"
        _focus={{ opacity: 1, boxShadow: 'outline' }}
        opacity={0}
        _groupHover={{ opacity: 0.6 }}
        ml="0.35rem"
        transition="opacity 0.2s ease"
      >
        #
      </chakra.span>
    </Link>
  );
};

const Image = props => {
  if (!props.blurDataURL) {
    // eslint-disable-next-line
    return <img src={props.src} alt={props.alt || ''} width={300} height={300} />;
  }
  return (
    <NextImage
      {...props}
      width={props.width}
      height={props.height}
      loading="lazy"
      quality={100}
    />
  );
};

const Anchor = props => (
  <chakra.a
    color="brand.primary"
    textDecoration="underline"
    textDecorationColor="brand.line"
    textUnderlineOffset="3px"
    _hover={{ textDecorationColor: 'brand.primary' }}
    transition="color 0.2s ease, text-decoration-color 0.2s ease"
    {...props}
  />
);

const MDXComponents = {
  code: CodeHighlight,
  inlineCode: InlineCode,
  h1: props => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
  h2: props => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
  h3: props => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: props => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: props => <chakra.hr apply="mdx.hr" {...props} />,
  strong: props => <Box as="strong" fontWeight="semibold" {...props} />,
  pre: Pre,
  kbd: Kbd,
  img: Image,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? 'br' : undefined}
      height={reset ? undefined : '24px'}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: props => <chakra.p apply="mdx.p" fontSize="lg" lineHeight="1.8" {...props} />,
  ul: props => <chakra.ul px={{ base: 4, md: 8 }} apply="mdx.ul" {...props} />,
  ol: props => <chakra.ol apply="mdx.ul" {...props} />,
  li: props => <chakra.li pb="4px" fontSize="lg" lineHeight="1.8" {...props} />,
  blockquote: props => (
    <Box>
      <Alert
        role="none"
        status="warning"
        variant="left-accent"
        as="blockquote"
        rounded="4px"
        borderLeftColor="brand.primary"
        bg="brand.quote"
        {...props}
        mx={-4}
        w="unset"
      />
    </Box>
  ),
  HTMLPlot,
};

export default MDXComponents;
