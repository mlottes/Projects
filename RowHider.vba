Option Explicit

Private Sub Worksheet_Change(ByVal Target As Range)

' GASB_Formatter Macro
' Removes the parts that aren't required based on the value in cell G33
Application.EnableEvents = False

If Not Application.Intersect(Target, Me.Range("G33")) Is Nothing Then
    If Range("G33").Value = "No" Or Range("G33").Value = "no" Or Range("G33").Value = "NO" Then

        Rows("35:54").Select
        Selection.EntireRow.Hidden = True
        Range("G33").Select
    ElseIf Range("G33").Value = "Yes" Or Range("G33").Value = "yes" Or Range("G33").Value = "Yes" Then
    
        Rows("35:54").Select
        Selection.EntireRow.Hidden = False
        Range("G33").Select
        
    End If
End If

Application.EnableEvents = True
End Sub
