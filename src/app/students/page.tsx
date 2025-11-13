import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Student {
  id: number;
  name: string;
  email: string;
  subjects: string[];
}

export default async function StudentsPage() {
  const res = await fetch('http://localhost:8080/students', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Erreur lors du chargement des étudiants');
  }

  const students: Student[] = await res.json();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      p={4}
      gap={4}
    >
      <Typography variant="h4" fontWeight="bold" color="primary">
        Liste des étudiants 🎓
      </Typography>

      {students.length === 0 ? (
        <Typography>Aucun étudiant trouvé.</Typography>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            width: '80%',
            maxWidth: 800,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Nom</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Matières</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map(student => (
                <TableRow key={student.id} hover>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    {student.subjects.length > 0
                      ? student.subjects.join(', ')
                      : '—'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
