import { Box, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const PageBtn = ({ active, onClick, children, disabled }) => (
  <Box
    component="button"
    onClick={onClick}
    disabled={disabled}
    sx={{
      minWidth: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid",
      borderColor: active ? "transparent" : "rgba(232,184,109,0.25)",
      background: active
        ? "linear-gradient(135deg, #e8b86d 0%, #c69049 100%)"
        : "rgba(26,18,11,0.6)",
      color: active ? "#1a120b" : "#f5ebe0",
      fontWeight: 700,
      fontFamily: "Inter, sans-serif",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "all .3s ease",
      "&:hover": !disabled && !active ? { borderColor: "#e8b86d", color: "#e8b86d" } : {},
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </Box>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{ pt: 4, pb: 2, flexWrap: "wrap", rowGap: 1 }}
    >
      <PageBtn onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeftRoundedIcon />
      </PageBtn>
      {pages.map((p) => (
        <PageBtn key={p} active={p === currentPage} onClick={() => onPageChange(p)}>
          {p}
        </PageBtn>
      ))}
      <PageBtn onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <ChevronRightRoundedIcon />
      </PageBtn>
    </Stack>
  );
};

export default Pagination;
