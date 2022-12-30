const StyledText = styled.span``;

export function Text({tag, children, ...props}) {
    return (
        <StyledText as={tag} {...props}>
            {children}
        </StyledText>
    )
}